
import {render,screen,fireEvent} from "@testing-library/react";
import "@testing-library/jest-dom";
import Modal from '../../component/Modal'
import { Typography } from "@mui/material";

describe("Modal Component",()=>{
    it("Should not render when open is false",()=>{
        render(<Modal name={"modal"} open={false} handleClose={jest.fn()} handleOpen={jest.fn()} handleFunction={jest.fn()}/>)
        const modalElement= screen.queryByText(/Modal content/i);
        expect(modalElement).toBeNull();
    });
    
    it("Should  render when open is true",()=>{
        render(<Modal name={"modal"} open={true} handleClose={jest.fn()} handleOpen={jest.fn()} handleFunction={jest.fn()}>Are you sure you want to delete this transaction?</Modal>)
        const modalElement= screen.getByText(/Are you sure you want to delete this transaction?/i);
        expect(modalElement).toBeInTheDocument();
    });

 it("Should call handleClose fn when cancel button is clicked",()=>{
        const handleClose=jest.fn();
        render(<Modal open={true} handleClose={handleClose} >Are you sure you want to delete this transaction?</Modal>)
      fireEvent.click(screen.getByTestId('cancel-button'))
      expect(handleClose).toHaveBeenCalled();
    });
    
})