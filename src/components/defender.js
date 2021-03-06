import React from 'react'
import { Fragment } from 'react'
import { connect } from 'react-redux'
import { updateDefense } from '../actions/defender'
import { RuleOptions, RuleOption } from './rule_options'
import { defense_options } from '../data/options'
import { addDefenseOption, removeDefenseOption } from '../actions/defender'

class Toughness extends React.Component {
    handleChange = (event) => {
        this.props.dispatch(updateDefense({
            id: this.props.defense.id,
            toughness: event.target.value,
            equiv: ""
        }))
    }
    
    render() {
        const { toughness } = this.props.defense;
        return (
            <div className="defense-toughness defense-field">
                <input
                    className='defense-input-toughness defense-input'
                    type='text'
                    value={toughness}
                    placeholder='Toughness'
                    onChange={this.handleChange}>
                </input>
            </div>
        )
    }
}

class Wounds extends React.Component {
    handleChange = (event) => {
        this.props.dispatch(updateDefense({
            id: this.props.defense.id,
            wounds: event.target.value,
            equiv: ""
        }))
    }
    
    render() {
        const { wounds } = this.props.defense;
        return (
            <div className="defense-wounds defense-field">
                <input
                    className='defense-input-toughness defense-input'
                    type='text'
                    value={wounds}
                    placeholder='Wounds'
                    onChange={this.handleChange}>
                </input>
            </div>
        )
    }
}

class Save extends React.Component {
    handleChange = (event) => {
        this.props.dispatch(updateDefense({
            id: this.props.defense.id,
            save: event.target.value,
            equiv: ""
        }))
    }
    
    handleBlur = (event) => {
        event.target.value = this.renderSave()
    }

    renderSave = () => {
        return this.props.defense.save
            ? `${this.props.defense.save}+`
            : ""
    } 

    render () {
        return (
            <div className="defense-save defense-field">
                <input
                    className='defense-input-toughness defense-input'
                    type='text'
                    value={this.renderSave()}
                    placeholder='Save'
                    onChange={this.handleChange}
                    onBlur={this.handleBlur}>
                </input>
            </div>
        )
    }
}

class InvulnSave extends React.Component {
    handleChange = (event) => {
        this.props.dispatch(updateDefense({
            id: this.props.defense.id,
            invulnsave: event.target.value,
            equiv: ""
        }))
    }
    
    handleBlur = (event) => {
        event.target.value = this.renderInvulnSave()
    }

    renderInvulnSave = () => {
        return this.props.defense.invulnsave
            ? `${this.props.defense.invulnsave}++`
            : ""
    } 

    render () {
        return (
            <div className="defense-invuln-save defense-field">
                <input
                    className='defense-input-toughness defense-input'
                    type='text'
                    value={this.renderInvulnSave()}
                    placeholder='Invuln Save'
                    onChange={this.handleChange}
                    onBlur={this.handleBlur}>
                </input>
            </div>
        )
    }
}

class DefenseEquiv extends React.Component {
    handleOptionChange = (event) => {
        switch(event.target.value) {
            case "geq":
                return this.props.dispatch(updateDefense({
                    id: this.props.defense.id,
                    equiv: "geq",
                    toughness: 3,
                    wounds: 1,
                    save: 5,
                    invulnsave: 0
                }))
            case "meq":
                return this.props.dispatch(updateDefense({
                    id: this.props.defense.id,
                    equiv: "meq",
                    toughness: 4,
                    wounds: 1,
                    save: 3,
                    invulnsave: 0
                }))
            case "teq":
                return this.props.dispatch(updateDefense({
                    id: this.props.defense.id,
                    equiv: "teq",
                    toughness: 4,
                    wounds: 2,
                    save: 2,
                    invulnsave: 5
                }))
            case "veq":
                return this.props.dispatch(updateDefense({
                    id: this.props.defense.id,
                    equiv: "veq",
                    toughness: 7,
                    wounds: 10,
                    save: 3,
                    invulnsave: 0
                }))
            case "keq":
                return this.props.dispatch(updateDefense({
                    id: this.props.defense.id,
                    equiv: "keq",
                    toughness: 8,
                    wounds: 25,
                    save: 3,
                    invulnsave: 5
                }))
            default:
                return
        }
    }

    render() {
        const { defense } = this.props
        return (
            <div className="defense-equiv">
                <div className="defense-equiv-radio">
                    <label htmlFor="geq">
                        GEQ
                        <input
                            type="radio"
                            id="geq"
                            name="defense_equiv"
                            value="geq"
                            checked={defense.equiv === 'geq'}
                            onChange={this.handleOptionChange} />
                    </label>
                </div>
                <div className="defense-equiv-radio">
                    <label htmlFor="meq">
                        MEQ
                        <input
                            type="radio"
                            id="meq"
                            name="defense_equiv"
                            value="meq"
                            checked={defense.equiv === 'meq'}
                            onChange={this.handleOptionChange} />
                    </label>
                </div>
                <div className="defense-equiv-radio">
                    <label htmlFor="teq">
                        TEQ
                        <input
                            type="radio"
                            id="teq"
                            name="defense_equiv"
                            value="teq"
                            checked={defense.equiv === 'teq'}
                            onChange={this.handleOptionChange} />
                    </label>
                </div>
                <div className="defense-equiv-radio">
                    <label htmlFor="veq">
                        VEQ
                        <input
                            type="radio"
                            id="veq"
                            name="defense_equiv"
                            value="veq"
                            checked={defense.equiv === 'veq'}
                            onChange={this.handleOptionChange} />
                    </label>
                </div>
                <div className="defense-equiv-radio">
                    <label htmlFor="keq">
                        KEQ
                        <input
                            type="radio"
                            id="keq"
                            name="defense_equiv"
                            value="keq"
                            checked={defense.equiv === 'keq'}
                            onChange={this.handleOptionChange} />
                    </label>
                </div>
            </div>
        )
    }
}

class Defense extends React.Component {
    render() {
        const { defense, dispatch } = this.props
        return(
            <Fragment>
                <RuleOptions
                    defense={defense}
                    dispatch={dispatch}
                    options={defense_options}
                    clickFunction={addDefenseOption}
                    title="Defense Options"
                    position={10}
                />
                <Toughness key={`${defense.id}_toughness`} defense={defense} dispatch={dispatch}/>
                <Wounds key={`${defense.id}_wounds`} defense={defense} dispatch={dispatch}/>
                <Save key={`${defense.id}_save`} defense={defense} dispatch={dispatch}/>
                <InvulnSave key={`${defense.id}_invulnsave`} defense={defense} dispatch={dispatch}/>
                <DefenseEquiv defense={defense} dispatch={dispatch}/>
                <div className="defense-options-display options-container">
                    { defense.options && defense.options.map((option) => (
                        <RuleOption
                            key={option.id}
                            defense={defense}
                            dispatch={dispatch}
                            option={option}
                            clickFunction={removeDefenseOption}
                        />
                    ))}
                </div>
            </Fragment>
        )
    }
}

class Defender extends React.Component {
    render() {
        const { defender, dispatch } = this.props
        return (
            <div className='defender'>
                <div><em className="title">Defense</em></div>
                <div className="defense-container">
                    <div className="defense-title">Options</div>
                    <div className="defense-title">Toughness</div>
                    <div className="defense-title">Wounds</div>
                    <div className="defense-title">Save</div>
                    <div className="defense-title">Invuln Save</div>
                    <Defense
                        key={defender.id}
                        defense={defender}
                        dispatch={dispatch}
                    />
                </div>
            </div>
        )
    }
}

export default connect( (state) => ({
    defender: state.defender
}))(Defender)