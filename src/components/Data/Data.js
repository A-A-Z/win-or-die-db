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
    this.episodesIndex = {}
    this.episodeCount = EpisodesData.length
    this.charactersIndex = {}
    this.factionsIndex = {}
    this.lastEpisodeFloat = 0
    this.lastSeasion = 0
    this.lastEpisode = 0

    // run through episodes
    for (let entry of EpisodesData) {
      if (!this.episodes[entry.season]) {
        this.episodes[entry.season] = {}
      }

      this.episodes[entry.season][entry.episode] = {
        epIndex: entry.index,
        title: entry.title,
        entrances: [],
        exits: []
      }

      this.episodesIndex[entry.index] = {
        season: entry.season,
        episode: entry.episode
      }

      let epAsNumber = entry.season + (entry.episode / 100)
      if (epAsNumber > this.lastEpisodeFloat) {
        this.lastEpisodeFloat = epAsNumber
        this.lastSeasion = entry.season
        this.lastEpisode = entry.episode
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

  static getFaction (factKey) {
    if (this.factionsIndex.hasOwnProperty(factKey)) {
      return this.factions[this.factionsIndex[factKey]]
    } else {
      return null
    }
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

  static getEpisodeByIndex (epIndex) {
    if (this.episodesIndex.hasOwnProperty(epIndex)) {
      return this.episodesIndex[epIndex]
    } else {
      return null
    }
  }

  static getLastEpisode () {
    return {
      season: this.lastSeasion,
      episode: this.lastEpisode
    }
  }

  static hasCharEntered (charKey, seasonNo = 1, epNo = 2) {
    const thisChar = this.getCharacter(charKey)

    if (thisChar) {
      for (let move of thisChar.entrances) {
        if (this.isMoveWithinEp(move, seasonNo, epNo)) {
          return true
        }
      }

      return false
    } else {
      return null
    }
  }

  static isCharLiving (charKey, seasonNo = 1, epNo = 2) {
    const thisChar = this.getCharacter(charKey)

    if (thisChar) {
      if (seasonNo > 0 && epNo > 0) {
        let entrances = 0
        let exits = 0

        // count entrances by this episode
        for (let move of thisChar.entrances) {
          if (this.isMoveWithinEp(move, seasonNo, epNo)) {
            entrances++
          }
        }

        // if no entrances then they are "alive" (not 100% true, but go with it for now)
        if (entrances === 0) {
          return true
        }

        // count exits by this episode
        for (let move of thisChar.exits) {
          if (this.isMoveWithinEp(move, seasonNo, epNo)) {
            exits++
          }
        }

        return (entrances > exits)
      } else {
        return (thisChar.entrances > thisChar.exits)
      }
    } else {
      return null
    }
  }

  static isMoveWithinEp (move, seasonNo, epNo) {
    // is entrances/exit in or before this season/episode
    return (seasonNo > move.season || (seasonNo === move.season && epNo >= move.episode))
  }

  static isLastEpisode (seasonNo, epNo) {
    let epAsNumber = seasonNo + (epNo / 100)
    return (this.lastEpisodeFloat === epAsNumber)
  }
}

Data.indexData()
