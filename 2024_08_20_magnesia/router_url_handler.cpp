namespace magnesia::activities::settings {
class SettingsUrlHandler: public URLHandler {
public:
    explicit SettingsUrlHandler(Settings* activity);
    bool handleURL(const QUrl& url) override;

private:
    Settings* m_activity {nullptr};
};
}
