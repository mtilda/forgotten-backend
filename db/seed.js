const db = require('../db')
const User = require('../models/user')
const Transaction = require('../models/transaction')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {

    const user1 = new User({ name: 'Kay', handle: 'mxkay', email: 'mxkay@aol.com' })
    await user1.save()

    const user2 = new User({ name: 'Will', handle: 'wt08', email: 'wt08@yahoo.com' })
    await user2.save()

    const user3 = new User({ name: 'Mohammad', handle: 'mohammad523', email: 'mohammad523@msn.com' })
    await user3.save()


    const transactions = [

        {        
            name: 'Frisbee',
            icon: 'frisbee',
            value: 5,
            transactionDate: 2020-01-30,
            returnDate: 2020-08-18,
            lenderID: '',
            lenderName: 'Will',
            borrowerID: '',
            borrowerName: 'Kay',
            creator: user1._id
        },
        {        
            name: 'Ducati',
            icon: 'motorcycle',
            value: 50000,
            transactionDate: 2020-03-08,
            returnDate: 2020-12-25,
            lenderID: '',
            lenderName: 'Mohammad',
            borrowerID: '',
            borrowerName: 'Ty',
            creator: user3._id
        },
        {        
            name: 'Java Book',
            icon: 'book',
            value: 25,
            transactionDate: 2020-05-12,
            returnDate: 2021-01-01,
            lenderID: '',
            lenderName: 'Kay',
            borrowerID: '',
            borrowerName: 'Will',
            creator: user2._id
        },
        {        
            name: 'Laptop',
            icon: 'computer',
            value: 2000,
            transactionDate: 2020-04-26,
            returnDate: 2020-08-18,
            lenderID: '',
            lenderName: 'Kay',
            borrowerID: '',
            borrowerName: 'Mohammad',
            creator: user2._id
        },
        {        
            name: 'beach house',
            icon: 'home',
            value: 500000,
            transactionDate: 2020-06-17,
            returnDate: 2030-12-31,
            lenderID: '',
            lenderName: 'Will',
            borrowerID: '',
            borrowerName: 'Ty',
            creator: user1._id
        }

    ]

    await Transaction.insertMany(transactions)
    console.log("Seed data has been added!")
}

const run = async () => {
    await main()
    db.close()
}

run()