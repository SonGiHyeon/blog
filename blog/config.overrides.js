module.exports = function override(config, env) {
    config.module.rules = config.module.rules.map((rule) => {
        if (rule.use) {
            rule.use = rule.use.filter((use) => {
                return !use.loader || !use.loader.includes("source-map-loader");
            });
        }
        return rule;
    });

    return config;
};
