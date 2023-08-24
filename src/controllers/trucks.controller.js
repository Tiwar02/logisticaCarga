import { pool } from "../db.js"


export const getTrucks = async(req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM trucks')
        res.status(200).json(rows)
    } catch (error) {
        return res.status(500).json({
            message:'Something is wrong'
        })
    }
    
}

export const getTruck = async(req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM trucks WHERE id = ?', [req.params.id])
    
        if(rows.length <= 0) return res.status(404).json({
            message: 'Truck not found'
        })

        res.status(200).json(rows[0])
    } catch (error) {
        return res.status(500).json({
            message:'Something is wrong'
        })
    }
}

export const createTrucks = async (req, res) =>{
    const {model, plate, capacity, status} = req.body
    try {
        const [rows] = await pool.query('INSERT INTO trucks (model, plate, capacity, status) VALUES (?, ?, ? ,?)', [model, plate, capacity, status])
        res.status(201).json({
            message: "Truck created"
        })
    } catch (error) {
        return res.status(500).json({
            message:'Something is wrong'
        })
    }
}

export const updateTrucks = async (req, res) => {
    try {
        const {id} = req.params
        const {model, plate, capacity, status} = req.body
        const [result] = await pool.query('UPDATE trucks SET model = IFNULL(?, model), plate = IFNULL(?, plate), capacity = IFNULL(?, capacity), status = IFNULL(?, status) WHERE id = ?', [model, plate, capacity, status, id])

        if(result.affectedRows === 0) return res.status(404).json({
            message: 'Truck not found'
        })

        res.status(200).json({
            message: 'Truck updated'
        })
    } catch (error) {
        return res.status(500).json({
            message:'Something is wrong'
        })
    }
}

export const deleteTrucks = async (req, res) => {
    try {
        const [result] = await pool.query('DELETE FROM trucks WHERE id = ?', [req.params.id])
        if(result.affectedRows <= 0) return res.status(404).json({
            message: 'Truck not found'
        })

        res.sendStatus(204)
    } catch (error) {
        return res.status(500).json({
            message:'Something is wrong'
        })
    }
}