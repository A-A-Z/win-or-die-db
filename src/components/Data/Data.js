import { CharactersData, CharFactionsData, FactionsData, EntrancesData, ExitsData, EpisodesData } from '../../data/'

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
        title: entry.title
      }
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

    // run through Factions
    for (let [index, entry] of FactionsData.entries()) {
      let factionsExtend = {
        members: { primary: [], secondary: [] }
      }
      this.factions.push(Object.assign(entry, factionsExtend))
      this.factionsIndex[entry.nameshort] = index
    }

    // run through Character-Factions
    for (let charFact of CharFactionsData) {
      let charIndex = this.charactersIndex[charFact.char]
      let factIndex = this.factionsIndex[charFact.faction]
      this.characters[charIndex].factions[charFact.type].push(FactionsData[factIndex])
    }

    // run through entrances
    for (let entrance of EntrancesData) {
      let charIndex = this.charactersIndex[entrance.char]
      this.characters[charIndex].entrances.push(entrance)
    }

    // run through exits
    for (let exit of ExitsData) {
      let charIndex = this.charactersIndex[exit.char]
      this.characters[charIndex].exits.push(exit)
    }
  }

  static getChatacters () {
    return this.characters
  }

  static getCharacter (key) {
    if (this.charactersIndex[key]) {
      return this.characters[this.charactersIndex[key]]
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
}
