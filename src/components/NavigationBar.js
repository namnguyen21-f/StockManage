import {Fragment,useState} from 'react';
import './NavigationBar.css';
import {Link} from 'react-router-dom';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Logo from '../logo.svg'

//isVertical navigationbar direction is vertical
// data for navBar
//title
//navItem //data : {title,path, sub: nav nested in navItem}
//sub {title,path}

export default function NavigationBar(props){
    const [cur, setCur] = useState({cur: -1, pre: -1, subOpen: []}); //cur is current of user's click
    const handleClick = (currentIndex,type) =>{
        var tmp = cur.subOpen;
        if (type == "sub"){
            if (tmp.includes(currentIndex)){
                const index = tmp.indexOf(currentIndex);
                if (index > -1) {
                    tmp.splice(index, 1);
                }
            }else{
                tmp.push(currentIndex);
            }
        }
        setCur({...cur,cur: currentIndex,subOpen: tmp});
        
    }

    return(
        <div className="navBar">
            <div className={props.isVertical ? "navVertical" : "navHorizontal"}>
                <div className="logo">
                    <img src={Logo} alt="logo"></img>
                </div>
                <div className="sub">
                </div>
                <div className="navigationBar">
                    {props.data.map((ele,index) => {
                        return (
                            <div key={index} className="navItem">
                                {ele.title && 
                                    <div className="navItem_title">
                                        <p>{ele.title}</p>
                                    </div>}
                                {ele.data && ele.data.map((item,index2) => {
                                    if (!item.sub){
                                        return (
                                            <div key={index*100 + index2*10} className={cur.cur == (index*100 + index2*10) ? "navItem_item active": "navItem_item"} 
                                                onClick={() => {handleClick(index*100 + index2*10)}}>
                                                <Link to={item.path}>
                                                    {item.icon}
                                                    <span>{item.title}</span>      
                                                </Link>
                                            </div>
                                        )
                                    }else{
                                        return (
                                            <Fragment>
                                                <div key={index*100 + index2*10} className={cur.cur == index*100 + index2*10 ? "navItem_sub" + " active" : "navItem_sub"}
                                                    onClick={() => {handleClick(index*100 + index2*10, "sub")}}>
                                                    <div>
                                                        {item.icon}
                                                        {item.title}
                                                        <span><ArrowDropDownIcon/></span>
                                                    </div>
                                                </div>
                                                {cur.subOpen.includes(index*100 + index2*10) && item.sub &&
                                                    item.sub.map((subitem,index3) => {
                                                        return (
                                                            <div key={index*100 + index2*10 +index3 + 1} className={cur.cur == index*100 + index2*10 +index3 + 1 ? "navItem_sub_item active" : "navItem_sub_item"} 
                                                                onClick={() => {handleClick(index*100 + index2*10 + index3 + 1)}}>
                                                                <Link to={subitem.path}>
                                                                    {subitem.icon}
                                                                    <span>{subitem.title}</span>      
                                                                </Link>
                                                            </div>
                                                        )
                                                    })}
                                            </Fragment>       
                                        )
                                    }
                                })}
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
