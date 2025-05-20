import PropTypes from 'prop-types';
import { useMemo } from 'react';

import { urlImgs } from '../data';
import { getHeroesByPublisher } from '../helpers';


export const HeroesList = ({ publisher }) => {

    const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);
    
    return (
        <>
            <div className="container overflow-auto">
                <div className='row'>
                    {
                        heroes.length > 0 ?
                            heroes.map((heroe) => {
                                return (
                                    <div className='col-3 mb-4' key={heroe.id}>
                                        <div className='card' >
                                            <div className="card-body ">
                                                <img className='img-fluid' src={urlImgs[heroe.id]} alt={heroe.superhero} />
                                            </div>

                                            <div className='card-footer'>
                                                <span>{heroe.superhero}</span>
                                                <br />
                                                <span>{heroe.publisher}</span>
                                                <br />
                                                <span>{heroe.alter_ego}</span>
                                                <br />
                                                <span>{heroe.first_appearance}</span>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })
                            : <h1>No hay información</h1>
                    }
                </div>
            </div>
        </>
    );
};

HeroesList.propTypes = {
    publisher: PropTypes.string.isRequired,
};
