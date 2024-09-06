// Default rules for allowed transitions between stages
export const defaultConfig = {
    rules: [
      { from: 'Stage1', to: 'Stage2' },
      { from: 'Stage2', to: 'Stage3' },
      // Add more rules as needed
    ],
    promptDataFields: ['description', 'notes'], // Fields to prompt for during transitions
  };
  
  // Validate if a block can move between stages based on rules
  export const canTransition = (fromStage, toStage, rules) => {
    return rules.some((rule) => rule.from === fromStage && rule.to === toStage);
  };
  