import { Container, Row, Col } from 'reactstrap';
import CampsitesList from '../features/counter/campsites/CampsitesList';
import SubHeader from '../components/SubHeader';

const CampsitesDirectoryPage = () => {
    return (
        <Container>
            <SubHeader current='Directory' />
            <Row>
                <CampsitesList />
            </Row>
        </Container>
    )
}

export default CampsitesDirectoryPage;
