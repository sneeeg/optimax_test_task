import ProductCard from "./ProductCard";
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import {shallow, configure} from 'enzyme';

configure({adapter: new Adapter()});


it('Should render ProductCard component', () => {
    const component = shallow(<ProductCard id={1} title={'test'} image={'test'} price={10} cartAdd={null} />)
    const wrapper = component.find(".product_card")
    expect(wrapper.length).toBe(1)
})