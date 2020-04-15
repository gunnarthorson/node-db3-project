const db = require('../data/db-config')

module.exports = {
    find,
    findById,
    findSteps,
    add,
    update,
    remove
}

function find() {
    return db('schemes');
}

function findById(id) {
    return db('schemes')
    .where({id})
    .first()
}

function findSteps(id) {
    return db('steps')
    .join("schemes", "schemes.id", "=", "steps.scheme_id")
    .select('schemes.scheme_name', 'steps.step_number', 'steps.instructions')
    .where({scheme_id: id})
  }

  function add(scheme) {
    return db("schemes").insert(scheme);
  }

  function update(changes, id) {
    return db('schemes')
    .update(changes)
    .where({id})
  }

  function remove(id) {
    return db('schemes')
    .where({id})
    .delete()
  }
  