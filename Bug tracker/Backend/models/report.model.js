const mongoose = require('mongoose')

const reportSchma = new mongoose.Schema({
    title:{ type: String, required: true},
    type: { type: String, required: true , enum: ['bug' ,'feature']},
    description: { type: String, required: true },
    severity: { type: String, required: true, enum: ['critical', 'medium', 'low'], default: 'low' },
    lastOcurrence: { type: Date, required: false},
    resolved: { type: Boolean, default: false },
    resolvedBy: { type: String, required: false },
    createdAt: { type: Date, required: true, default: Date.now },
    createdBy: { type: String, required: true },
    resolvedAt: { type: Date, required: false, default: null },
    
    
    
    
})

module.exports = mongoose.model('Report', reportSchma)