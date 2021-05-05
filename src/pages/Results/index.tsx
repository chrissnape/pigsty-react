import { FC, Fragment, useEffect } from 'react';
import { Container, Row, Col } from 'react-grid';
import { AccomodationBlock, SearchBox } from '../../components';
import { Accomodation, PaymentType, Query, RoomType } from '../../utils/types';
import { AccomodationBlockWrapper, ResultsLabel, SearchBoxWrapper } from './style';

type Props = {
  accomodationSearchResults: Array<Accomodation>,
  accomodationSearchResultsGetRequest: boolean,
  accomodationSearchResultsGetSuccess: boolean,
  accomodationSearchResultsGetFailure: boolean,
  error: string | null,
  getAccomodationSearchResults: Function,
  getAllPaymentTypes: Function,
  getAllRoomTypes: Function,
  paymentTypes: Array<PaymentType>,
  query: Query,
  roomTypes: Array<RoomType>,
}

const ResultsScreen: FC<Props> = ({
  accomodationSearchResults,
  accomodationSearchResultsGetRequest,
  accomodationSearchResultsGetSuccess,
  accomodationSearchResultsGetFailure,
  error,
  getAccomodationSearchResults,
  getAllPaymentTypes,
  getAllRoomTypes,
  paymentTypes,
  query,
  roomTypes,
}): JSX.Element => {
  useEffect(() => {
    getAccomodationSearchResults(query);
    getAllPaymentTypes();
    getAllRoomTypes();
  }, [getAccomodationSearchResults, getAllPaymentTypes, getAllRoomTypes]);
  
  const getResults: Function = (): JSX.Element => {
    if (accomodationSearchResultsGetSuccess) {
      return (
        <Fragment>
          <ResultsLabel>{accomodationSearchResults.length}</ResultsLabel> results
            {accomodationSearchResults.map((accomodation: Accomodation) => {
              const {
                id,
                address: { city, postcode },
                availability: { dateTimestamp },
                images,
                propertyType,
                price,
                roomType,
                title,
              } = accomodation;
              return (
                <AccomodationBlockWrapper key={id}>
                  <AccomodationBlock
                    id={id}
                    availabileDateTimestamp={dateTimestamp}
                    city={city}
                    images={images}
                    postcode={postcode}
                    price={price}
                    propertyType={propertyType}
                    roomType={roomType}
                    title={title}
                  />
                </AccomodationBlockWrapper>
              );
            })}
        </Fragment>
      );
    }
    if (accomodationSearchResultsGetFailure) {
      return <div>{error}</div>;
    }
    return <div>Fetching results</div>;
  }

  return (
    <Container>
      <Row>
        <Col xs={12} lg={3}>
          <SearchBoxWrapper>
            <SearchBox
              onSubmit={getAccomodationSearchResults}
              paymentTypes={paymentTypes}
              query={query}
              roomTypes={roomTypes}
            />
          </SearchBoxWrapper>
        </Col>
        <Col xs={12} lg={9}>
          {getResults()}
        </Col>
      </Row>
    </Container>
  );
}

export default ResultsScreen;
