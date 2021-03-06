import { createSelector } from 'reselect';

const selectGlobal = state => state.global;
const selectRoute = state => state.route;

/* Global */
const makeSelectLocation = () => createSelector(
  selectRoute,
  (routeState) => routeState.location,
);

const makeSelectMissingAPI = () => createSelector(
  selectGlobal,
  (globalState) => globalState.missingAPI,
);

const makeSelectLoading = () => createSelector(
  selectGlobal,
  (globalState) => globalState.loading,
);

const makeSelectError = () => createSelector(
  selectGlobal,
  (globalState) => globalState.error,
);

const makeSelectSuccess = () => createSelector(
  selectGlobal,
  (globalState) => globalState.success,
);

const makeSelectConversationBarOpen = () => createSelector(
  selectGlobal,
  (globalState) => globalState.conversationBarOpen,
);

const makeSelectNotifications = () => createSelector(
  selectGlobal,
  (globalState) => globalState.notifications,
);

const makeSelectMessages = () => createSelector(
  selectGlobal,
  (globalState) => globalState.messages,
);

const makeSelectWaitingResponse = () => createSelector(
  selectGlobal,
  (globalState) => globalState.waitingResponse,
);

const makeSelectConversationStateObject = () => createSelector(
  selectGlobal,
  (globalState) => globalState.conversationStateObject,
);

/* Agents */
const makeSelectAgents = () => createSelector(
  selectGlobal,
  (globalState) => globalState.agents,
);

const makeSelectAgentExport = () => createSelector(
  selectGlobal,
  (globalState) => globalState.agentExport,
);

/* Agent */
const makeSelectAgent = () => createSelector(
  selectGlobal,
  (globalState) => globalState.agent,
);

const makeSelectCurrentAgent = () => createSelector(
  selectGlobal,
  (globalState) => globalState.currentAgent,
);

const makeSelectAgentWebhook = () => createSelector(
  selectGlobal,
  (globalState) => globalState.agentWebhook,
);

const makeSelectAgentPostFormat = () => createSelector(
  selectGlobal,
  (globalState) => globalState.agentPostFormat,
);

const makeSelectAgentSettings = () => createSelector(
  selectGlobal,
  (globalState) => globalState.agentSettings,
);

const makeSelectAgentTouched = () => createSelector(
  selectGlobal,
  (globalState) => globalState.agentTouched,
);

const makeSelectSuccessAgent = () => createSelector(
  selectGlobal,
  (globalState) => globalState.successAgent,
);

const makeSelectDocuments = () => createSelector(
  selectGlobal,
  (globalState) => globalState.documents,
);

const makeSelectTotalDocuments = () => createSelector(
  selectGlobal,
  (globalState) => globalState.totalDocuments,
);

/* Keywords */
const makeSelectKeywords = () => createSelector(
  selectGlobal,
  (globalState) => globalState.keywords,
);

const makeSelectTotalKeywords = () => createSelector(
  selectGlobal,
  (globalState) => globalState.totalKeywords,
);

/* Sayings */
const makeSelectSayings = () => createSelector(
  selectGlobal,
  (globalState) => globalState.sayings,
);

const makeSelectTotalSayings = () => createSelector(
  selectGlobal,
  (globalState) => globalState.totalSayings,
);

const makeSelectCategories = () => createSelector(
  selectGlobal,
  (globalState) => globalState.categories,
);

const makeSelectFilteredCategories = () => createSelector(
  selectGlobal,
  (globalState) => globalState.filteredCategories,
);

const makeSelectSelectedCategory = () => createSelector(
  selectGlobal,
  (globalState) => globalState.selectedCategory,
);

const makeSelectNewSayingActions = () => createSelector(
  selectGlobal,
  (globalState) => globalState.newSayingActions,
);

/* Actions */
const makeSelectActions = () => createSelector(
  selectGlobal,
  (globalState) => globalState.actions,
);

const makeSelectCurrentAction = () => createSelector(
  selectGlobal,
  (globalState) => globalState.currentAction,
);

const makeSelectTotalActions = () => createSelector(
  selectGlobal,
  (globalState) => globalState.totalActions,
);

const makeSelectAction = () => createSelector(
  selectGlobal,
  (globalState) => globalState.action,
);

const makeSelectActionWebhook = () => createSelector(
  selectGlobal,
  (globalState) => globalState.actionWebhook,
);

const makeSelectActionPostFormat = () => createSelector(
  selectGlobal,
  (globalState) => globalState.actionPostFormat,
);

const makeSelectSayingForAction = () => createSelector(
  selectGlobal,
  (globalState) => globalState.sayingForAction,
);

const makeSelectActionTouched = () => createSelector(
  selectGlobal,
  (globalState) => globalState.actionTouched,
);

const makeSelectSuccessAction = () => createSelector(
  selectGlobal,
  (globalState) => globalState.successAction,
);

const makeSelectNewActionResponse = () => createSelector(
  selectGlobal,
  (globalState) => globalState.newActionResponse
)

/* Settings */
const makeSelectSettings = () => createSelector(
  selectGlobal,
  (globalState) => globalState.settings,
);

/* Keyword */
const makeSelectKeyword = () => createSelector(
  selectGlobal,
  (globalState) => globalState.keyword,
);

const makeSelectKeywordTouched = () => createSelector(
  selectGlobal,
  (globalState) => globalState.keywordTouched,
);

const makeSelectSuccessKeyword = () => createSelector(
  selectGlobal,
  (globalState) => globalState.successKeyword,
);

/* Category */
const makeSelectCategory = () => createSelector(
  selectGlobal,
  (globalState) => globalState.category,
);

const makeSelectCategoryTouched = () => createSelector(
  selectGlobal,
  (globalState) => globalState.categoryTouched,
);

const makeSelectSuccessCategory = () => createSelector(
  selectGlobal,
  (globalState) => globalState.successCategory,
);

/* Locale */
const makeSelectLocale = () =>createSelector(
  selectGlobal,
  (globalState) => globalState.locale
);

export {
  makeSelectLocation,
  makeSelectMissingAPI,
  makeSelectLoading,
  makeSelectError,
  makeSelectSuccess,
  makeSelectConversationBarOpen,
  makeSelectNotifications,
  makeSelectMessages,
  makeSelectWaitingResponse,
  makeSelectConversationStateObject,
  makeSelectAgents,
  makeSelectAgentExport,
  makeSelectAgent,
  makeSelectCurrentAgent,
  makeSelectAgentWebhook,
  makeSelectAgentPostFormat,
  makeSelectAgentSettings,
  makeSelectAgentTouched,
  makeSelectSuccessAgent,
  makeSelectKeywords,
  makeSelectTotalKeywords,
  makeSelectSayings,
  makeSelectTotalSayings,
  makeSelectCategories,
  makeSelectFilteredCategories,
  makeSelectSelectedCategory,
  makeSelectNewSayingActions,
  makeSelectActions,
  makeSelectTotalActions,
  makeSelectAction,
  makeSelectCurrentAction,
  makeSelectActionTouched,
  makeSelectSuccessAction,
  makeSelectNewActionResponse,
  makeSelectActionWebhook,
  makeSelectActionPostFormat,
  makeSelectSayingForAction,
  makeSelectSettings,
  makeSelectKeyword,
  makeSelectKeywordTouched,
  makeSelectSuccessKeyword,
  makeSelectCategory,
  makeSelectCategoryTouched,
  makeSelectSuccessCategory,
  makeSelectDocuments,
  makeSelectTotalDocuments,
  makeSelectLocale
};
