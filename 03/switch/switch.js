let buy = prompt('I want buy:');

switch (buy) {
    case 'milk':
    case 'Milk':
        console.log(`${buy} cost 1$ milk`);
        break;        
    case 'orange':
        console.log(`${buy} cost 1$`);
        break;
    case 'onion':
        console.log(`${buy} cost 0.2$`);
        break;
    default:
        console.log(`Any information about ${buy}`);
        break;
}
