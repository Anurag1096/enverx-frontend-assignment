

import {render,screen} from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from "../../component/Button"

describe("Button Component",()=>{
    it("Should Be enabled by default",()=>{
        render(<Button/>)
        const buttonElement= screen.getByRole('button');
        expect(buttonElement).toBeEnabled();
    })
})


