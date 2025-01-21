import simplifyDom from './simplifyDom'
import prettifyXml from './prettifyXmlString'
import basicRuleSet from './basicRuleSet'

const body = document.body.deepCloneWithReferences() // deep clone body, including references to original elements
const prettifiedOriginal = prettifyXml(body.outerHTML)

const bodySimplified = simplifyDom(body, basicRuleSet) // simplify the cloned body
const prettifiedSimplified = prettifyXml(bodySimplified.outerHTML) // prettify the simplified body html string


console.log('DONE! Results: ')
console.log('Original html', prettifiedOriginal)
console.log('Simplified html', prettifiedSimplified)