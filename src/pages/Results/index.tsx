import { FC, Fragment, useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-grid';
import { AccomodationBlock, SearchBox } from '../../components';
import { Accomodation, Query } from '../../utils/types';
import { AccomodationBlockWrapper, ResultsLabel, SearchBoxWrapper } from './style';

type Props = {
  accomodationSearchResults: Array<Accomodation>,
  accomodationSearchResultsGetRequest: boolean,
  accomodationSearchResultsGetSuccess: boolean,
  accomodationSearchResultsGetFailure: boolean,
  error: string | null,
  getAccomodationSearchResults: Function,
  query: Query,
}

const ResultsScreen: FC<Props> = ({
  accomodationSearchResults,
  accomodationSearchResultsGetRequest,
  accomodationSearchResultsGetSuccess,
  accomodationSearchResultsGetFailure,
  error,
  getAccomodationSearchResults,
  query,
}): JSX.Element => {
  const [searchValue, setSearchValue] = useState<string>('');
  useEffect(() => {
    if (query.city) {
      setSearchValue(query.city);
    }
  }, [query]);

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
              onChange={(value: string) => setSearchValue(value)}
              onClick={() => {
                if (searchValue.length > 0) {
                  const city = searchValue.charAt(0).toUpperCase() + searchValue.slice(1).toLowerCase();
                  getAccomodationSearchResults({ city });
                }
              }}
              searchValue={searchValue}
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
