// Lifecycle
export const CONSTRUCTED = 'PLAYER_CONSTRUCTED' // config was parsed
export const INIT = 'PLAYER_INIT' // initial config
export const READY = 'PLAYER_READY' // config was parsed
export const RESTORE = 'PLAYER_RESTORE' // restored

// Chapters
export const SET_CHAPTERS_LIST = 'PLAYER_SET_CHAPTERS_LIST'
export const NEXT_CHAPTER = 'PLAYER_NEXT_CHAPTER'
export const PREVIOUS_CHAPTER = 'PLAYER_PREVIOUS_CHAPTER'
export const SET_CHAPTER = 'PLAYER_SET_CHAPTER'
export const UPDATE_CHAPTER = 'PLAYER_UPDATE_CHAPTER'

// Steppers
export const STEP_FORWARD = 'PLAYER_STEP_FORWARD'
export const STEP_BACKWARDS = 'PLAYER_STEP_BACKWARDS'

// Components => internal
export const SHOW_COMPONENT_INFO = 'PLAYER_SHOW_COMPONENT_INFO'
export const SHOW_COMPONENT_SHOW_TITLE = 'PLAYER_SHOW_COMPONENT_SHOW_TITLE'
export const SHOW_COMPONENT_EPISODE_TITLE = 'PLAYER_SHOW_COMPONENT_EPISODE_TITLE'
export const SHOW_COMPONENT_SUBTITLE = 'PLAYER_SHOW_COMPONENT_SUBTITLE'
export const SHOW_COMPONENT_INFO_POSTER = 'PLAYER_SHOW_COMPONENT_INFO_POSTER'
export const SHOW_COMPONENT_CONTROLS_CHAPTERS = 'PLAYER_SHOW_COMPONENT_CONTROLS_CHAPTERS'
export const SHOW_COMPONENT_CONTROLS_STEPPERS = 'PLAYER_SHOW_COMPONENT_CONTROLS_STEPPERS'
export const SHOW_COMPONENT_CONTROLS_BUTTON_LOADING =
  'PLAYER_SHOW_COMPONENT_CONTROLS_BUTTON_LOADING'
export const SHOW_COMPONENT_CONTROLS_BUTTON_REPLAY = 'PLAYER_SHOW_COMPONENT_CONTROLS_BUTTON_REPLAY'
export const SHOW_COMPONENT_CONTROLS_BUTTON_REMAINING =
  'PLAYER_SHOW_COMPONENT_CONTROLS_BUTTON_REMAINING'
export const SHOW_COMPONENT_CONTROLS_BUTTON_DURATION =
  'PLAYER_SHOW_COMPONENT_CONTROLS_BUTTON_DURATION'
export const SHOW_COMPONENT_CONTROLS_BUTTON_RETRY = 'PLAYER_SHOW_COMPONENT_CONTROLS_BUTTON_RETRY'
export const SHOW_COMPONENT_CONTROLS_BUTTON_PLAYING =
  'PLAYER_SHOW_COMPONENT_CONTROLS_BUTTON_PLAYING'
export const SHOW_COMPONENT_CONTROLS_BUTTON_PAUSE = 'PLAYER_SHOW_COMPONENT_CONTROLS_BUTTON_PAUSE'
export const SHOW_COMPONENT_PROGRESSBAR = 'PLAYER_SHOW_COMPONENT_PROGRESSBAR'
export const SHOW_COMPONENT_TAB = 'PLAYER_SHOW_COMPONENT_TAB'
export const SHOW_COMPONENT_VOLUME_SLIDER = 'PLAYER_SHOW_COMPONENT_VOLUME_SLIDER'
export const SHOW_COMPONENT_RATE_SLIDER = 'PLAYER_SHOW_COMPONENT_RATE_SLIDER'
export const SHOW_COMPONENT_CHANNELS = 'PLAYER_SHOW_COMPONENT_CHANNELS'
export const SHOW_COMPONENT_CONTROLS_BUTTON = 'PLAYER_SHOW_COMPONENT_CONTROLS_BUTTON'

export const HIDE_COMPONENT_INFO = 'PLAYER_HIDE_COMPONENT_INFO'
export const HIDE_COMPONENT_SHOW_TITLE = 'PLAYER_HIDE_COMPONENT_SHOW_TITLE'
export const HIDE_COMPONENT_EPISODE_TITLE = 'PLAYER_HIDE_COMPONENT_EPISODE_TITLE'
export const HIDE_COMPONENT_SUBTITLE = 'PLAYER_HIDE_COMPONENT_SUBTITLE'
export const HIDE_COMPONENT_INFO_POSTER = 'PLAYER_HIDE_COMPONENT_INFO_POSTER'
export const HIDE_COMPONENT_ERROR = 'PLAYER_HIDE_COMPONENT_ERROR'
export const HIDE_COMPONENT_CONTROLS_CHAPTERS = 'PLAYER_HIDE_COMPONENT_CONTROLS_CHAPTERS'
export const HIDE_COMPONENT_CONTROLS_STEPPERS = 'PLAYER_HIDE_COMPONENT_CONTROLS_STEPPERS'
export const HIDE_COMPONENT_CONTROLS_BUTTON = 'PLAYER_HIDE_COMPONENT_CONTROLS_BUTTON'
export const HIDE_COMPONENT_PROGRESSBAR = 'PLAYER_HIDE_COMPONENT_PROGRESSBAR'
export const HIDE_COMPONENT_TAB = 'PLAYER_HIDE_COMPONENT_TAB'
export const HIDE_COMPONENT_VOLUME_SLIDER = 'PLAYER_HIDE_COMPONENT_VOLUME_SLIDER'
export const HIDE_COMPONENT_RATE_SLIDER = 'PLAYER_HIDE_COMPONENT_RATE_SLIDER'
export const HIDE_COMPONENT_CHANNELS = 'PLAYER_HIDE_COMPONENT_CHANNELS'

// Visible Components => external
export const SHOW_VISIBLE_COMPONENTS_TAB_INFO = 'PLAYER_SHOW_VISIBLE_COMPONENTS_TAB_INFO'
export const SHOW_VISIBLE_COMPONENTS_TAB_CHAPTERS = 'PLAYER_SHOW_VISIBLE_COMPONENTS_TAB_CHAPTERS'
export const SHOW_VISIBLE_COMPONENTS_TAB_FILES = 'PLAYER_SHOW_VISIBLE_COMPONENTS_TAB_FILES'
export const SHOW_VISIBLE_COMPONENTS_TAB_AUDIO = 'PLAYER_SHOW_VISIBLE_COMPONENTS_TAB_AUDIO'
export const SHOW_VISIBLE_COMPONENTS_TAB_SHARE = 'PLAYER_SHOW_VISIBLE_COMPONENTS_TAB_SHARE'
export const SHOW_VISIBLE_COMPONENTS_TAB_TRANSCRIPTS =
  'PLAYER_SHOW_VISIBLE_COMPONENTS_TAB_TRANSCRIPTS'
export const SHOW_VISIBLE_COMPONENTS_TAB_PLAYLIST = 'PLAYER_SHOW_VISIBLE_COMPONENTS_TAB_PLAYLIST'

export const SHOW_VISIBLE_COMPONENTS_HEADER_POSTER = 'PLAYER_SHOW_VISIBLE_COMPONENTS_HEADER_POSTER'
export const SHOW_VISIBLE_COMPONENTS_HEADER_TITLE = 'PLAYER_SHOW_VISIBLE_COMPONENTS_HEADER_TITLE'
export const SHOW_VISIBLE_COMPONENTS_HEADER_EPISODE =
  'PLAYER_SHOW_VISIBLE_COMPONENTS_HEADER_EPISODE'
export const SHOW_VISIBLE_COMPONENTS_HEADER_SUBTITLE =
  'PLAYER_SHOW_VISIBLE_COMPONENTS_HEADER_SUBTITLE'

export const SHOW_VISIBLE_COMPONENTS_CONTROLS_STEPPER =
  'PLAYER_SHOW_VISIBLE_COMPONENTS_CONTROLS_STEPPER'
export const SHOW_VISIBLE_COMPONENTS_CONTROLS_CHAPTERS =
  'PLAYER_SHOW_VISIBLE_COMPONENTS_CONTROLS_CHAPTERS'
export const SHOW_VISIBLE_COMPONENTS_CONTROLS_PROGRESSBAR =
  'PLAYER_SHOW_VISIBLE_COMPONENTS_CONTROLS_PROGRESSBAR'

export const HIDE_VISIBLE_COMPONENTS_TAB_INFO = 'PLAYER_HIDE_VISIBLE_COMPONENTS_TAB_INFO'
export const HIDE_VISIBLE_COMPONENTS_TAB_CHAPTERS = 'PLAYER_HIDE_VISIBLE_COMPONENTS_TAB_CHAPTERS'
export const HIDE_VISIBLE_COMPONENTS_TAB_FILES = 'PLAYER_HIDE_VISIBLE_COMPONENTS_TAB_FILES'
export const HIDE_VISIBLE_COMPONENTS_TAB_AUDIO = 'PLAYER_HIDE_VISIBLE_COMPONENTS_TAB_AUDIO'
export const HIDE_VISIBLE_COMPONENTS_TAB_SHARE = 'PLAYER_HIDE_VISIBLE_COMPONENTS_TAB_SHARE'
export const HIDE_VISIBLE_COMPONENTS_TAB_TRANSCRIPTS =
  'PLAYER_HIDE_VISIBLE_COMPONENTS_TAB_TRANSCRIPTS'
export const HIDE_VISIBLE_COMPONENTS_TAB_PLAYLIST = 'PLAYER_HIDE_VISIBLE_COMPONENTS_TAB_PLAYLIST'

export const HIDE_VISIBLE_COMPONENTS_HEADER_POSTER = 'PLAYER_HIDE_VISIBLE_COMPONENTS_HEADER_POSTER'
export const HIDE_VISIBLE_COMPONENTS_HEADER_TITLE = 'PLAYER_HIDE_VISIBLE_COMPONENTS_HEADER_TITLE'
export const HIDE_VISIBLE_COMPONENTS_HEADER_EPISODE =
  'PLAYER_HIDE_VISIBLE_COMPONENTS_HEADER_EPISODE'
export const HIDE_VISIBLE_COMPONENTS_HEADER_SUBTITLE =
  'PLAYER_HIDE_VISIBLE_COMPONENTS_HEADER_SUBTITLE'

export const HIDE_VISIBLE_COMPONENTS_CONTROLS_STEPPER =
  'PLAYER_HIDE_VISIBLE_COMPONENTS_CONTROLS_STEPPER'
export const HIDE_VISIBLE_COMPONENTS_CONTROLS_CHAPTERS =
  'PLAYER_HIDE_VISIBLE_COMPONENTS_CONTROLS_CHAPTERS'
export const HIDE_VISIBLE_COMPONENTS_CONTROLS_PROGRESSBAR =
  'PLAYER_HIDE_VISIBLE_COMPONENTS_CONTROLS_PROGRESSBAR'

// Error
export const BACKEND_ERROR = 'PLAYER_BACKEND_ERROR'
export const NETWORK_EMPTY = 'PLAYER_NETWORK_EMPTY'
export const NETWORK_NO_SOURCE = 'PLAYER_NETWORK_NO_SOURCE'
export const ERROR_MISSING_AUDIO_FILES = 'PLAYER_ERROR_MISSING_AUDIO_FILES'
export const ERROR_POSTER_LOAD = 'PLAYER_ERROR_POSTER_LOAD'

// Progress
export const SIMULATE_PLAYTIME = 'PLAYER_SIMULATE_PLAYTIME'
export const ENABLE_GHOST_MODE = 'PLAYER_ENABLE_GHOST_MODE'
export const DISABLE_GHOST_MODE = 'PLAYER_DISABLE_GHOST_MODE'

// Player
export const REQUEST_PLAY = 'PLAYER_REQUEST_PLAY'
export const BACKEND_PLAY = 'PLAYER_BACKEND_PLAY'
export const REQUEST_PAUSE = 'PLAYER_REQUEST_PAUSE'
export const BACKEND_PAUSE = 'PLAYER_BACKEND_PAUSE'
export const REQUEST_RESTART = 'PLAYER_REQUEST_RESTART'
export const BACKEND_BUFFER = 'PLAYER_BACKEND_BUFFER'
export const STOP = 'PLAYER_STOP'
export const IDLE = 'PLAYER_IDLE'
export const BACKEND_LOADING_START = 'PLAYER_BACKEND_LOADING_START'
export const BACKEND_LOADING_END = 'PLAYER_BACKEND_LOADING_END'
export const REQUEST_LOAD = 'PLAYER_REQUEST_LOAD'
export const LOADED = 'PLAYER_LOADED'
export const BACKEND_END = 'PLAYER_BACKEND_END'

// Audio
export const MUTE = 'PLAYER_MUTE'
export const UNMUTE = 'PLAYER_UNMUTE'
export const SET_VOLUME = 'PLAYER_SET_VOLUME'
export const SET_RATE = 'PLAYER_SET_RATE'

// Timepiece
export const BACKEND_DURATION = 'PLAYER_BACKEND_DURATION'
export const BACKEND_PLAYTIME = 'PLAYER_BACKEND_PLAYTIME'
export const REQUEST_PLAYTIME = 'PLAYER_REQUEST_PLAYTIME'
export const UPDATE_PLAYTIME = 'PLAYER_UPDATE_PLAYTIME'

// Quantiles
export const LOAD_QUANTILES = 'PLAYER_LOAD_QUANTILES'
export const SET_QUANTILE = 'PLAYER_SET_QUANTILE'

// Runtime
export const SET_RUNTIME = 'PLAYER_SET_RUNTIME'
export const SET_LANGUAGE = 'PLAYER_SET_LANGUAGE'
export const SET_VERSION = 'PLAYER_SET_VERSION'
export const SET_MODE = 'PLAYER_SET_MODE'

// Share
export const SELECT_CONTENT = 'PLAYER_SELECT_CONTENT'
export const SELECT_CHANNEL = 'PLAYER_SELECT_CHANNEL'
export const SELECT_EMBED_SIZE = 'PLAYER_SELECT_EMBED_SIZE'

// Tabs
export const TOGGLE_TAB = 'PLAYER_TOGGLE_TAB'
export const SET_TABS = 'PLAYER_SET_TABS'

// Theme
export const SET_THEME = 'PLAYER_SET_THEME'

// Transcripts
export const SET_TRANSCRIPTS_TIMELINE = 'PLAYER_SET_TRANSCRIPTS_TIMELINE'
export const UPDATE_TRANSCRIPTS = 'PLAYER_UPDATE_TRANSCRIPTS'
export const TOGGLE_FOLLOW_TRANSCRIPTS = 'PLAYER_TOGGLE_FOLLOW_TRANSCRIPTS'
export const SEARCH_TRANSCRIPTS = 'PLAYER_SEARCH_TRANSCRIPTS'
export const SET_SEARCH_TRANSCRIPTS_RESULTS = 'PLAYER_SET_SEARCH_TRANSCRIPTS_RESULTS'
export const NEXT_SEARCH_RESULT = 'PLAYER_NEXT_SEARCH_RESULT'
export const PREVIOUS_SEARCH_RESULT = 'PLAYER_PREVIOUS_SEARCH_RESULT'
export const RESET_SEARCH_TRANSCRIPTS = 'PLAYER_RESET_SEARCH_TRANSCRIPTS'

// Error
export const SHOW_ERROR = 'PLAYER_SHOW_ERROR'
export const HIDE_ERROR = 'PLAYER_HIDE_ERROR'
export const RETRY_PLAY = 'PLAYER_RETRY_PLAY'
export const ERROR_CONFIG_MEDIA = 'PLAYER_ERROR_CONFIG_MEDIA'

// Keyboard
export const KEY_UP = 'PLAYER_KEY_UP'
export const KEY_DOWN = 'PLAYER_KEY_DOWN'

// Playlist
export const NEXT_PLAYLIST_ENTRY = 'PLAYER_NEXT_PLAYLIST_ENTRY'
export const SELECT_PLAYLIST_ENTRY = 'PLAYER_SELECT_PLAYLIST_ENTRY'
