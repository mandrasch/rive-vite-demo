// TODO: can we get types from rive react or elsewhere?
// https://stackoverflow.com/a/58150006
declare module "*.riv" {
  const value: any; // Add better type definitions here if desired.
  export default value;
}
