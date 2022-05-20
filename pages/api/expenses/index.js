
import prisma from 'lib/prisma'

const handleMissingData = ( res, parameter) => {
    return res
        .status(400)
        .json({ message: `Missing required parameter '${parameter}'`})
}

export default async function handler(req, res) {
    
    if (req.method === 'POST') {
        
        const {trip, name, date, amount, currency} = req.body;

        if (!trip) {
            return handleMissingData(res, 'trip');
        }

        if (!name) {
            return handleMissingData(res, 'name');
        }

        if (!amount) {
            return handleMissingData(res, 'amount');
        }

        if (!currency) {
            return handleMissingData(res, 'currency');
        }

        await prisma.expense.create({
            data: {
                trip,
                name,
                date, 
                amount,
                currency,
            },
        });

        return res.status(200).end();
    }

    res.status(405).json({ message: 'Method Not Allowed' });
}