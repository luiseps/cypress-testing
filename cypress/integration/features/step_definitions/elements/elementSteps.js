import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import { ElementPage } from './elementPage'

Given('I open the home page', () => {
    ElementPage.visit()
})

When('I add an element', () => {
    ElementPage.addElement()
})

When('I delete the element', () => {
    ElementPage.deleteElement()
})

Then('I should see that the element is visible', () => {
    ElementPage.verifyIfElementIsVisible()
})

Then('I should see that the element was deleted', () => {
    ElementPage.verifyIfElementWasDeleted()
})