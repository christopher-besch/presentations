namespace Spi1 {
typedef modm::platform::SpiMaster1 Handler;
typedef modm::platform::GpioA5::Sck SckPin;
typedef modm::platform::GpioA6::Miso MisoPin;
typedef modm::platform::GpioA7::Mosi MosiPin;
}  // namespace Spi1

namespace Adc1 {
// adc type: Snippet_ADC128S102
// [...]
typedef Spi1::Handler Spi;
typedef modm::platform::GpioOutputB1 CSPin;
}  // namespace Adc1
