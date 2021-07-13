import Button from '@material-ui/core/Button';

export default function button(props) {
    return(
        <Button size="small" color="primary">
                {props.children}
        </Button>
    );
}