const SearchBar = require("./SearchBar")
// @ponicode
describe("onInputChange", () => {
    let inst

    beforeEach(() => {
        inst = new SearchBar.default()
    })

    test("0", () => {
        let callFunction = () => {
            inst.onInputChange({ target: { value: "elio@example.com" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.onInputChange({ target: { value: "Dillenberg" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.onInputChange({ target: { value: "Elio" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst.onInputChange(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
