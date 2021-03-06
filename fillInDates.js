const moment = require('moment')
moment.locale('en-GB')

const exampleData = [
  [ '09-04-2020', 1586390400, '30:28', '5.06', '06:01' ],
  [ '14-04-2020', 1586822400, '17:32', '2.97', '05:54' ],
  [ '15-04-2020', 1586908800, '27:15', '4.78', '05:42' ],
  [ '20-04-2020', 1587340800, '28:18', '5.01', '05:38' ],
  [ '06-05-2020', 1588723200, '27:11', '5.00', '05:26' ],
  [ '21-09-2020', 1600646400, '9:33', '1.82', '05:14' ],
  [ '22-09-2020', 1600732800, '15:26', '2.89', '05:20' ],
  [ '29-09-2020', 1601337600, '29:18', '5.50', '05:19' ],
  [ '01-10-2020', 1601510400, '35:04', '6.29', '05:34' ],
  [ '05-10-2020', 1601856000, '37:08', '6.82', '05:26' ],
  [ '08-10-2020', 1602115200, '28:09', '5.11', '05:30' ],
  [ '15-10-2020', 1602720000, '11:14', '2.19', '05:07' ],
  [ '19-10-2020', 1603065600, '22:53', '4.17', '05:29' ],
  [ '20-10-2020', 1603152000, '27:05', '4.77', '05:40' ],
  [ '26-10-2020', 1603670400, '12:08', '2.34', '05:11' ],
  [ '01-11-2020', 1604188800, '29:46', '5.30', '05:36' ],
  [ '03-11-2020', 1604361600, '12:39', '2.43', '05:12' ],
  [ '05-11-2020', 1604534400, '12:37', '2.52', '05:00' ],
  [ '12-11-2020', 1605139200, '26:03', '4.79', '05:26' ],
  [ '13-11-2020', 1605225600, '21:26', '3.95', '05:25' ],
  [ '18-11-2020', 1605657600, '21:15', '4.02', '05:17' ],
  [ '26-11-2020', 1606348800, '22:24', '4.34', '05:09' ],
  [ '07-12-2020', 1607299200, '22:20', '4.13', '05:24' ],
  [ '11-12-2020', 1607644800, '25:15', '4.51', '05:35' ],
  [ '04-01-2021', 1609718400, '13:32', '2.53', '05:20' ],
  [ '07-01-2021', 1609977600, '20:36', '3.79', '05:26' ],
  [ '09-01-2021', 1610150400, '25:13', '5.01', '05:01' ],
  [ '11-01-2021', 1610323200, '26:00', '5.02', '05:10' ],
  [ '14-01-2021', 1610582400, '27:24', '5.30', '05:10' ],
  [ '16-01-2021', 1610755200, '25:36', '5.01', '05:06' ],
  [ '19-01-2021', 1611014400, '23:59', '5.01', '04:47' ],
  [ '20-01-2021', 1611100800, '1:02:39', '12.02', '05:12' ],
  [ '22-01-2021', 1611273600, '17:57', '3.28', '05:28' ],
  [ '23-01-2021', 1611360000, '40:36', '8.55', '04:44' ],
  [ '25-01-2021', 1611532800, '23:57', '5.01', '04:46' ],
  [ '26-01-2021', 1611619200, '39:00', '8.01', '04:52' ]
]

const a = exampleData[0][1]

const b = a + 86400
const c = b + 86400
const d = c + 86400
const e = d + 86400
const f = e + 86400

// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)
// console.log(e)
// console.log(f)
// console.log(exampleData.length)


const newExample = [
  [ '09-04-2020', 1586390400, '30:28', '5.06', '06:01' ], 
  [ '14-04-2020', 1586822400, '17:32', '2.97', '05:54' ], 
  [ '15-04-2020', 1586908800, '27:15', '4.78', '05:42' ], 
  [ '20-04-2020', 1587340800, '28:18', '5.01', '05:38' ],
  [ '06-05-2020', 1588723200, '27:11', '5.00', '05:26' ]]

let i = 0
const new2 = []

while (i < newExample.length - 1) {
  let firstNumber = newExample[i][1] + 86400
  const secondNumber = newExample[i + 1][1]

  while (firstNumber < secondNumber) {
    const newDate = []

    newDate.push(moment.unix(firstNumber).format('DD-MM-YYYY'))
    newDate.push(firstNumber)
    newDate.push('')
    newDate.push('')
    newDate.push('')
    new2.push(newDate)
    firstNumber += 86400
  }
  i++
}

const concat = new2.concat(newExample)

const sortedArray = concat.sort(function(a, b) {
  return a[1] - b[1]
})

console.log(sortedArray)





