async function start() {
  try {
    const response = await promise

    return response
  } catch (err) {
    console.log(err)
  } finally {
    console.log("end")
  }
}
