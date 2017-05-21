import {
  CharactersData,
  CharFactionsData,
  FactionsData,
  EntrancesData,
  ExitsData,
  EpisodesData
} from '../../data/'

export default class Data {
  static indexData () {
    this.characters = []
    this.factions = []
    this.episodes = {}
    this.charactersIndex = {}
    this.factionsIndex = {}

    // run through episodes
    for (let entry of EpisodesData) {
      if (!this.episodes[entry.season]) {
        this.episodes[entry.season] = {}
      }

      this.episodes[entry.season][entry.episode] = {
        title: entry.title,
        entrances: [],
        exits: []
      }
    }

    // run through Factions
    for (let [index, entry] of FactionsData.entries()) {
      let factionsExtend = {
        members: { primary: [], secondary: [] }
      }
      this.factions.push(Object.assign(entry, factionsExtend))
      this.factionsIndex[entry.nameshort] = index
    }

    // run through Characters
    for (let [index, entry] of CharactersData.entries()) {
      let characterExtend = {
        factions: { primary: [], secondary: [] },
        titles: [],
        entrances: [],
        exits: []
      }
      this.characters.push(Object.assign(entry, characterExtend))
      this.charactersIndex[entry.nameshort] = index
    }

    // run through Character-Factions
    for (let charFact of CharFactionsData) {
      let charIndex = this.charactersIndex[charFact.char]
      let factIndex = this.factionsIndex[charFact.faction]

      // add faction to character
      this.characters[charIndex].factions[charFact.type].push(FactionsData[factIndex]) // Todo: Should this just be a index key?

      // add character to faction
      this.factions[factIndex].members[charFact.type].push(charFact.char)
    }

    // run through entrances
    for (let entrance of EntrancesData) {
      // add to character
      let charIndex = this.charactersIndex[entrance.char]
      this.characters[charIndex].entrances.push(entrance)

      // add to episode
      this.episodes[entrance.season][entrance.episode].entrances.push(entrance)
    }

    // run through exits
    for (let exit of ExitsData) {
      // add to character
      let charIndex = this.charactersIndex[exit.char]
      this.characters[charIndex].exits.push(exit)

      // add to episode
      this.episodes[exit.season][exit.episode].exits.push(exit)
    }
  }

  static getChatacters () {
    return this.characters
  }

  static getCharacter (charKey) {
    if (this.charactersIndex.hasOwnProperty(charKey)) {
      return this.characters[this.charactersIndex[charKey]]
    } else {
      return null
    }
  }

  static getFactions () {
    return this.factions
  }

  static getEpisodes () {
    return this.episodes
  }

  static getEpisode (session, episode) {
    if (this.episodes[session] && this.episodes[session][episode]) {
      return this.episodes[session][episode]
    } else {
      return null
    }
  }
}

Data.indexData()
