// example.hpp //
namespace magnesia::activities::example {
class Example : public Activity {
  public:
    explicit Example(QWidget* parent = nullptr);
};

// how to create the example tab from the Add Activity
class ConfigWidget : public magnesia::ConfigWidget {
  public:
    explicit ConfigWidget(QWidget* parent = nullptr);
};

inline constexpr ActivityMetadata metadata{
    .name                 = u"Example",
    .create_config_widget = []() -> magnesia::ConfigWidget* {
        return new ConfigWidget;
    },
};
}


// example.cpp //
namespace magnesia::activities::example {
Example::Example(QWidget* parent) : Activity(parent) {
    auto* layout = new QHBoxLayout;
    layout->addWidget(new QLabel("Hello World!"));
    setLayout(layout);
}

ConfigWidget::ConfigWidget(QWidget* parent)
  : magnesia::ConfigWidget(parent) {
    auto* layout = new QVBoxLayout;

    auto* create_button = new QPushButton("Open Example");
    connect(create_button, &QPushButton::clicked, this,
            [] {
                Application::instance().openActivity(new Example, "Example");
            });
    layout->addWidget(create_button);

    setLayout(layout);
}
}


// register activity //
namespace magnesia::activities {
inline constexpr std::array all{
    // --snip--
    example::metadata,
    // --snip--
};
}

