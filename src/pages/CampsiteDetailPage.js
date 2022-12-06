import { useSelector } from 'react-redux';
import { Container, Row } from 'reactstrap';
import { useParams } from 'react-router-dom';
import { selectCampsiteById } from '../features/campsites/campsitesSlice';
import CampsitesDetail from '../features/campsites/CampsitesDetail';
import CommentsList from '../features/comments/CommentsList';
import SubHeader from '../components/SubHeader';

const CampsiteDetailPage = () => {
    const { campsiteId} = useParams();
    const campsite = useSelector(selectCampsiteById(campsiteId));

    return (
        <Container>
            <SubHeader current={campsite.name} detail={true} />
            <Row>
                <CampsitesDetail campsite={campsite} />
                <CommentsList campsiteId={campsiteId} />
            </Row>
        </Container>
    )
}

export default CampsiteDetailPage;
