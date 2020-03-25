import React from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
// import ModalDialog from 'react-bootstrap/ModalDialog'
// import ModalHeader from 'react-bootstrap/ModalHeader'
// import ModalTitle from 'react-bootstrap/ModalTitle'

class WarningModal extends React.Component{
    
    deleteAndDismissModal(event){
        this.props.deleteHandler(this.props.deleteEntryId,event)
        this.props.onHide(event)
    }
    
    
    render(){
        const childProps = {show:this.props.show, onHide:this.props.onHide}
        const headerStyle={color:"red", textAlign:"center"}
        return (
            <>
                <Modal
                {...childProps}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Deleting Entry from Database
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                            <h5 style={headerStyle}>Are you sure you want to delete</h5> 
                            <h5 className="warning-modal" >{`${this.props.deleteEntryName}`}</h5>
                            <h5 style={headerStyle}>from the database?</h5>
                            <p style={{fontSize:"0.8rem", color:"grey", marginTop:5}}>
                                This operation is cannot be undone, 
                                deleted entries have to be reinserted back into the database manually
                            </p>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="danger" onClick={(e)=>this.deleteAndDismissModal(e)}>Delete</Button>
                        <Button variant="secondary" onClick={this.props.onHide}>Cancel</Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }
}

export default WarningModal
