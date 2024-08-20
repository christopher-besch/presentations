// example.hpp //
namespace magnesia::activities::dataviewer::panels::example {
class ExamplePanel : public Panel {
  public:
    explicit ExamplePanel(DataViewer*, QWidget* = nullptr);

    [[nodiscard]] const PanelMetadata& metadata() const noexcept override;
};

inline constexpr PanelMetadata metadata{
    .id     = u"example",
    .name   = u"Example",
    .create = create_helper<ExamplePanel>,
};
}


// example.cpp //
namespace magnesia::activities::dataviewer::panels::example {
ExamplePanel::ExamplePanel(DataViewer* dataviewer, QWidget* parent)
      : Panel(dataviewer, Panels::example, parent) {
    auto* layout = new QHBoxLayout;
    layout->addWidget(new QLabel("Hello World!"));
    setLayout(layout);
}

const PanelMetadata& ExamplePanel::metadata() const noexcept {
    return example::metadata;
};
}


// register panel //
namespace magnesia::activities::dataviewer::panels {
inline constexpr std::array all{
    // --snip--
    example::metadata,
};

enum class Panels : unsigned {
    // --snip--
    example        = 0x1 << 5,
};
}
