// const moment = require('moment')

// const example = '\n2.52\n<abbr class="unit" title="kilometers">\nkm\n</abbr>\n'

// const clean = example.replace(/(\r\n|\n|\r)/gm, '')
// const distance = clean.substring(0, clean.indexOf('<'))


// // * -------------

// const exampleData = [
//   [
//     'Tue, 1/26/2021',
//     '39:00',
//     '\n8.01\n<abbr class="unit" title="kilometers">\nkm\n</abbr>\n'
//   ],
//   [
//     'Mon, 1/25/2021',
//     '23:57',
//     '\n5.01\n<abbr class="unit" title="kilometers">\nkm\n</abbr>\n'
//   ],
//   [
//     'Sat, 1/23/2021',
//     '40:36',
//     '\n8.55\n<abbr class="unit" title="kilometers">\nkm\n</abbr>\n'
//   ],
//   [
//     'Fri, 1/22/2021',
//     '17:57',
//     '\n3.28\n<abbr class="unit" title="kilometers">\nkm\n</abbr>\n'
//   ],
//   [
//     'Wed, 1/20/2021',
//     '1:02:39',
//     '\n12.02\n<abbr class="unit" title="kilometers">\nkm\n</abbr>\n'
//   ],
//   [
//     'Tue, 1/19/2021',
//     '23:59',
//     '\n5.01\n<abbr class="unit" title="kilometers">\nkm\n</abbr>\n'
//   ],
//   [
//     'Sat, 1/16/2021',
//     '25:36',
//     '\n5.01\n<abbr class="unit" title="kilometers">\nkm\n</abbr>\n'
//   ],
//   [
//     'Thu, 1/14/2021',
//     '27:24',
//     '\n5.30\n<abbr class="unit" title="kilometers">\nkm\n</abbr>\n'
//   ],
//   [
//     'Mon, 1/11/2021',
//     '26:00',
//     '\n5.02\n<abbr class="unit" title="kilometers">\nkm\n</abbr>\n'
//   ],
//   [
//     'Sat, 1/9/2021',
//     '25:13',
//     '\n5.01\n<abbr class="unit" title="kilometers">\nkm\n</abbr>\n'
//   ],
//   [
//     'Thu, 1/7/2021',
//     '20:36',
//     '\n3.79\n<abbr class="unit" title="kilometers">\nkm\n</abbr>\n'
//   ],
//   [
//     'Mon, 1/4/2021',
//     '13:32',
//     '\n2.53\n<abbr class="unit" title="kilometers">\nkm\n</abbr>\n'
//   ],
//   [
//     'Fri, 12/11/2020',
//     '25:15',
//     '\n4.51\n<abbr class="unit" title="kilometers">\nkm\n</abbr>\n'
//   ],
//   [
//     'Mon, 12/7/2020',
//     '22:20',
//     '\n4.13\n<abbr class="unit" title="kilometers">\nkm\n</abbr>\n'
//   ],
//   [
//     'Thu, 11/26/2020',
//     '22:24',
//     '\n4.34\n<abbr class="unit" title="kilometers">\nkm\n</abbr>\n'
//   ],
//   [
//     'Wed, 11/18/2020',
//     '21:15',
//     '\n4.02\n<abbr class="unit" title="kilometers">\nkm\n</abbr>\n'
//   ],
//   [
//     'Fri, 11/13/2020',
//     '21:26',
//     '\n3.95\n<abbr class="unit" title="kilometers">\nkm\n</abbr>\n'
//   ],
//   [
//     'Thu, 11/12/2020',
//     '26:03',
//     '\n4.79\n<abbr class="unit" title="kilometers">\nkm\n</abbr>\n'
//   ],
//   [
//     'Thu, 11/5/2020',
//     '12:37',
//     '\n2.52\n<abbr class="unit" title="kilometers">\nkm\n</abbr>\n'
//   ],
//   [
//     'Tue, 11/3/2020',
//     '12:39',
//     '\n2.43\n<abbr class="unit" title="kilometers">\nkm\n</abbr>\n'
//   ]
// ]


// // function cleanDate(date) {
// //   const newDate = date.split(' ').pop()
// //   const momentDate = new Date(newDate)
// //   return moment(momentDate).unix()
// // }

// function cleanDate(date) {
//   const newDate = date.split(' ').pop()
//   const momentDate = new Date(newDate)
//   const momentDate2 = moment(momentDate, 'DD-MM-YYYY').isDST()

//   if (momentDate2) {
//     return moment(momentDate).unix() + 3600
//   } else {
//     return moment(momentDate).unix()
//   }
// }

// function cleanTime(time) {
//   if (time.length > 5) {
//     return moment.duration(time).asSeconds()
//   } else {
//     return moment.duration(time).asMinutes()
//   }
// }

// function cleanDistance(distance) {
//   const clean = distance.replace(/(\r\n|\n|\r)/gm, '')
//   return clean.substring(0, clean.indexOf('<'))
// }



// const cleanedData = []
// exampleData.forEach(row => {
//   const newArray = []
//   newArray.push(cleanDate(row[0]))

//   const seconds = cleanTime(row[1])
//   newArray.push(seconds)

//   const distance = parseFloat(cleanDistance(row[2]))
//   newArray.push(distance)

//   const split = (seconds / (distance / 1000))
//   newArray.push(moment.utc(split).format('mm:ss'))

//   cleanedData.push(newArray)
// })

// console.log(cleanedData)


const exampleData = [
  [ 1611619200, 2340, 8.01, '04:52' ],
  [ 1611532800, 1437, 5.01, '04:46' ],
  [ 1611360000, 2436, 8.55, '04:44' ],
  [ 1611273600, 1077, 3.28, '05:28' ],
  [ 1611100800, 3759, 12.02, '05:12' ],
  [ 1611014400, 1439, 5.01, '04:47' ],
  [ 1610755200, 1536, 5.01, '05:06' ],
  [ 1610582400, 1644, 5.3, '05:10' ],
  [ 1610323200, 1560, 5.02, '05:10' ],
  [ 1610150400, 1513, 5.01, '05:01' ],
  [ 1609977600, 1236, 3.79, '05:26' ],
  [ 1609718400, 812, 2.53, '05:20' ],
  [ 1607644800, 1515, 4.51, '05:35' ],
  [ 1607299200, 1340, 4.13, '05:24' ],
  [ 1606348800, 1344, 4.34, '05:09' ],
  [ 1605657600, 1275, 4.02, '05:17' ],
  [ 1605225600, 1286, 3.95, '05:25' ],
  [ 1605139200, 1563, 4.79, '05:26' ],
  [ 1604534400, 757, 2.52, '05:00' ],
  [ 1604361600, 759, 2.43, '05:12' ]
]

class Run {
  constructor(row) {
    this.date = row[0]
    this.time = row[1]
    this.distance = row[2]
    this.split = row[3]
  }
}

const newArray = []
exampleData.forEach(row => {
  newArray.push(new Run(row))
})

// example.distance = 1000
// newArray.push(example)


console.log(newArray)