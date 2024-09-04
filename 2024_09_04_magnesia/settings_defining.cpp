defineSettingDomain(
    "general", {                            // domain name

    QSharedPointer<magnesia::IntSetting> {  // type of setting
        new magnesia::IntSetting {
            "opcua_poll_intervall",         // internal name
            "OPC UA Polling Interval",      // human readable name
            "in milliseconds",              // description
            500, 10, 30000}},               // default, min, max

    QSharedPointer<magnesia::EnumSetting>{
        new magnesia::EnumSetting{
            "default_color", "Default Color", "The color to use everywhere.",
            magnesia::EnumSettingValue{"green"},
            {
                magnesia::EnumSettingValue{"green"},
                magnesia::EnumSettingValue{"blue"},
                magnesia::EnumSettingValue{"red"},
            }}}
    });
