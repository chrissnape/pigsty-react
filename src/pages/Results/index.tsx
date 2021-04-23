import { FC, useState } from 'react';
import { Container, Row, Col } from 'react-grid';
import { AccomodationBlock, Page, SearchBox } from '../../components';
import { Accomodation } from '../../utils/types';
import { AccomodationBlockWrapper, Results, ResultsLabel, SearchBoxWrapper} from './style';

type Props = {
  accomodation: Array<Accomodation>,
}

const ResultsScreen: FC<Props> = ({ accomodation }): JSX.Element => {
  const [searchValue, setSearchValue] = useState<string>('');
  return (
    <Page>
      <Results>
        <Container fluid>
          <Row>
            <Col xs={12} lg={3}>
              <SearchBoxWrapper>
                <SearchBox
                  onChange={(value: string) => setSearchValue(value)}
                  onClick={() => console.log(searchValue)}
                  searchValue={searchValue}
                />
              </SearchBoxWrapper>
            </Col>
            <Col xs={12} lg={9}>
              <ResultsLabel>{accomodation.length}</ResultsLabel> results
              {accomodation.map((accom: Accomodation) => {
                const {
                  id,
                  address: { city, postcode },
                  availability: { dateString },
                  images,
                  propertyType,
                  price,
                  roomType,
                  title,
                } = accom;
                return (
                  <AccomodationBlockWrapper key={id}>
                    <AccomodationBlock
                      availabileDateString={dateString}
                      city={city}
                      images={images}
                      onClick={() => console.log(id)}
                      postcode={postcode}
                      price={price}
                      propertyType={propertyType.name}
                      roomType={roomType.name}
                      title={title}
                    />
                  </AccomodationBlockWrapper>
                );
              })}
            </Col>
          </Row>
        </Container>
      </Results>
    </Page>
  );
}

export default ResultsScreen;
