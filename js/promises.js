let payment = false

console.log(`\n       PEDIDO - 1417887      \n`)
console.log("INICIANDO PROCESSO DE PAGAMENTO")

const paymentPromise = new Promise((resolve, reject) => {
  if (payment) {
    return resolve("STATUS DO PAGAMENTO: CONFIRMADO")
  }

  return reject("STATUS DO PAGAMENTO: NEGADO")
})

console.log("STATUS DO PAGAMENTO: AGUARDANDO")

paymentPromise
  .then((result) => console.log(result))
  .catch((error) => console.log(error))
  .finally(() => console.log("FINALIZANDO PROCESSO DE PAGAMENTO"))
