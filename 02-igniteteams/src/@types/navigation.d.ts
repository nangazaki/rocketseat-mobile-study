export type RootParamsList = {
  groups: undefined;
  addgroups: undefined;
  players: {
    group: string;
  };
};

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      groups: undefined;
      addgroups: undefined;
      players: {
        group: string;
      };
    }
  }
}
