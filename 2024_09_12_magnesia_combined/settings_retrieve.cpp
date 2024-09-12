Application::instance()
    .getSettingsManager()
    .getIntSetting({"opcua_poll_intervall", "general"})
    .value();
