namespace PlutoEPS
{
// [...]
namespace Dist12vBLclExt1
{
// snippet type: [Redacted]
// [Handle to describe this LCL.]
typedef void Handle;
// [The pin through which the controller turns this LCL on.]
typedef modm::platform::GpioOutputE2 DiOnNomPin;
// [The pin through which the controller turns this LCL off.]
typedef modm::platform::GpioOutputE1 DiOffNomPin;
// [This snippet has an analog output pin]
// [transmitting the current draw.]
// [This type specifies through which ADC and]
// [which channel the controller may read that value.]
typedef Adc1::Ch3 AoCurrentNoneAdc;
}  // namespace Dist12vBLclExt1
// [...]
}  // namespace PlutoEPS
