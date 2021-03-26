// e.g. 
// version=package-name-v1.2.7
module.exports = version => {
  const x = version.lastIndexOf('-')
  return version.substring(0, x)
}
