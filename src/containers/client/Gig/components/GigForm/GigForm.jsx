import React from 'react'
import { memo } from 'react'
import { useState } from 'react';
import { useFormik } from "formik"
import { useDispatch } from 'react-redux';

import { useEffect } from 'react';
import mainJobManagement from 'apis/QuanLiCongViecChinh';
import subJobManagement from 'apis/QuanLiCongViecPhu';
import { actCreateGig, actEditGig } from "store/actions/gig"

let initialValue = {
    "name": "",
    "rating": 10,
    "price": '',
    "proServices": '',
    "localSellers": '',
    "onlineSellers": '',
    "deliveryTime": '',
    "type": null,
    "subType": null
}
function GigForm(props) {
    const { displayForm, setDisplayForm } = props
    const [types, setTypes] = useState([])
    const [currentType, setCurrentType] = useState(0)
    const [subType, setSubType] = useState([])
    const [value, setValue] = useState({})
    useEffect(() => {
        mainJobManagement.fetchMainJob()
            .then((data) => {
                setTypes(data.data)
            })
            .catch(err => console.log(err))
        subJobManagement.fechListSubJob()
            .then((data) => {
                setSubType(data.data)
            })
            .catch(err => console.log(err))
        setValue(displayForm.values)
    }, [displayForm.values])
    const dispatch = useDispatch()

    

    const formik = useFormik({
        initialValues: value,
        onSubmit: async values => {
            if(displayForm.type === "create"){

                dispatch(actCreateGig(values))
            }else{
                // console.log(values)
                dispatch(actEditGig(displayForm.values._id, values))
            }
            setDisplayForm({display: false, type: "create", values: initialValue})
        },
    });

    const renderType = () => {
        return types?.map((item, index) => {
            return (
                <option value={item._id} key={item._id}>{item.name}</option>
            )
        })
    }

    const renderSubType = () => {

        const type = subType?.filter(item => {
            return item.typeJob != null && item.typeJob._id === currentType && item
        })

        return type?.map((item, index) => {
            return (
                <option value={item._id} key={item._id}>{item.name}</option>
            )
        })

    }
    const onChange = (type, newValue) => {
        setValue({...value, [type]: newValue})
        formik.setFieldValue(type, newValue)
    }
    console.log(value)
    if (!displayForm.display) return (<></>)
    return (
        <div className="GigForm__container">
            <div
                className="GigForm__overplay"
                onClick={() => setDisplayForm({ ...displayForm, display: false, type: "create", values: initialValue })}
            >
            </div>
            <div className="Gig__create">
                <form
                    className="Gig__box"
                    onSubmit={(e) => {
                        e.preventDefault()
                        formik.handleSubmit(e)
                    }}
                >
                    <h3>{displayForm.type === "create" ? "Create a new Gig" : "Edit a job"}</h3>
                    <input
                        type="text"
                        placeholder="Name"
                        name="name"
                        onChange={(e) => onChange("name",e.target.value)}
                        value={value.name}
                    />
                    <input
                        type="number"
                        placeholder="Price"
                        name="price"
                        onChange={(e) => onChange("price",e.target.value)}
                        value={value.price}
                    />
                    <select name="proServices" id="proServices" required 
                        onChange={(e) => onChange("proServices",e.target.value)}>
                        <option value="" disabled selected>Pro services</option>
                        <option value="true" selected={value.proServices ? true : false}>True</option>
                        <option value="false" selected={value.proServices ? false : true}>False</option>
                    </select>
                    <select name="localSellers" id="localSellers" required 
                        onChange={(e) => onChange("localSellers",e.target.value)}>
                        <option value="" disabled selected>Local sellers</option>
                        <option value="true" selected={value.localSellers ? true : false}>True</option>
                        <option value="false" selected={value.localSellers ? false : true}>False</option>
                    </select>
                    <select name="onlineSellers" id="onlineSellers" required 
                        onChange={(e) => onChange("onlineSellers",e.target.value)}>
                        <option value="" disabled selected>Online sellers</option>
                        <option value="true" selected={value.onlineSellers ? true : false}>True</option>
                        <option value="false" selected={value.onlineSellers ? false : true}>False</option>
                    </select>
                    <select name="deliveryTime" id="deliveryTime" required 
                        onChange={(e) => onChange("deliveryTime",e.target.value)}>
                        <option value="" disabled selected>Delivery time</option>
                        <option value="true" selected={value.deliveryTime ? true : false}>True</option>
                        <option value="false" selected={value.deliveryTime ? false : true}>False</option>
                    </select>

                    <select name="type" id="type" required
                        onChange={(e) => {
                            formik.setFieldValue('type', e.target.value)
                            setCurrentType(e.target.value)
                        }}
                    >
                        <option value="" disabled selected>Type</option>
                        {renderType()}
                    </select>
                    <select name="subType" id="subType" required onChange={formik.handleChange}>
                        <option value="" disabled selected >Sub type</option>
                        {renderSubType()}
                    </select>
                    <button type="submit" >Create</button>
                </form>

            </div>


        </div>
    )
}

export default memo(GigForm)
