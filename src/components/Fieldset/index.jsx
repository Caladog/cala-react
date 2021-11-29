import './index.less';
export default (props) => {
    return (
    <div class="feildset">
        <div class="header">
            <div class="title">
                <span>{props.title}</span>
            </div>
        </div>
        <div class="content">
            {props.children}
        </div>
    </div>
    )
}