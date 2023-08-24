import { pool } from "../db.js"


export const getTrailers = async(req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM trailers')
        res.status(200).json(rows)
    } catch (error) {
        return res.status(500).json({
            message:'Something is wrong'
        })
    }
    
}

export const getTrailer = async(req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM trailers WHERE id = ?', [req.params.id])
    
        if(rows.length <= 0) return res.status(404).json({
            message: 'Trailer not found'
        })

        res.status(200).json(rows[0])
    } catch (error) {
        return res.status(500).json({
            message:'Something is wrong'
        })
    }
}

export const createTrailer = async (req, res) =>{
    const {trailer_type, plate, capacity, status, cargo_type} = req.body
    try {
        const [rows] = await pool.query('INSERT INTO trailers (trailer_type, plate, capacity, status, cargo_type) VALUES (?, ?, ?, ?, ?)', [trailer_type, plate, capacity, status, cargo_type])
        res.status(201).json({
            message: "Trailer created"
        })
    } catch (error) {
        return res.status(500).json({
            message:'Something is wrong'
        })
    }
}

export const updateTrailer = async (req, res) => {
    try {
        const {id} = req.params
        const {trailer_type, plate, capacity, status, cargo_type} = req.body
        const [result] = await pool.query('UPDATE trailers SET trailer_type = IFNULL(?, trailer_type), plate = IFNULL(?, plate), capacity = IFNULL(?, capacity), status = IFNULL(?, status), cargo_type = IFNULL(?, cargo_type) WHERE id = ?', [trailer_type, plate, capacity, status, cargo_type, id])

        if(result.affectedRows === 0) return res.status(404).json({
            message: 'Trailer not found'
        })

        res.status(200).json({
            message: 'Trailer updated'
        })
    } catch (error) {
        return res.status(500).json({
            message:'Something is wrong'
        })
    }
}

export const deleteTrailer = async (req, res) => {
    try {
        const [result] = await pool.query('DELETE FROM trailers WHERE id = ?', [req.params.id])
        if(result.affectedRows <= 0) return res.status(404).json({
            message: 'Trailer not found'
        })

        res.sendStatus(204)
    } catch (error) {
        return res.status(500).json({
            message:'Something is wrong'
        })
    }
}