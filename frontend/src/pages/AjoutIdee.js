import React , {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class AjoutIdee extends Component
{
    state = {
        titre: '',
        description: '',
        etat: '',
    }

    handleInput = (e) => {
        this.setState({
            [e.target.titre]: e.target.value
        });
    }

    enregistrerIdee = async (e) => {
        e.preventDefault();
        const res = await axios.post('/api/ajout-idee', this.state);
    }

    render() {
        return (
            <div className='container'>
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">
                                <h4>Ajout des idées
                                <Link to={'/'} className="btn btn-primary btn-sm float-end">Retour</Link>
                                </h4>
                            </div>
                            <div className='card-body'>
                                <form onSubmit={this.enregistrerIdee}>
                                    <div className="form-group mb-3">
                                        <label>Titre </label>
                                        <input type="text" name="titre" onChange={this.handleInput} value={this.state.titre} className="form-control" />
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>Description </label>
                                        <input type="text" name="description" onChange={this.handleInput} value={this.state.description} className="form-control" />
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>Etat </label>
                                        <input type="checkbox" name="etat" onChange={this.handleInput} value={this.state.etat} className="form-control" />
                                    </div>
                                    <div className="form-group mb-3">
                                        <button type="submit" className="btn btn-success">Enregistrer</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AjoutIdee;