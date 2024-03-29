/* eslint-disable react/prop-types */
import { t } from "ttag";

import { QueryViewer } from "metabase-enterprise/audit_app/components/QueryViewer";
import { serializeCardForUrl } from "metabase/lib/card";

import * as QueryDetailCards from "../lib/cards/query_detail";
import OpenInMetabase from "../components/OpenInMetabase";
import AuditCustomView from "../containers/AuditCustomView";
import AuditContent from "../components/AuditContent";

const AuditQueryDetail = ({ params: { queryHash } }) => (
  <AuditCustomView card={QueryDetailCards.details(queryHash)}>
    {({ result }) => {
      if (!result) {
        return null;
      }
      const datasetQuery = result.data.rows[0][0];
      if (!datasetQuery) {
        return <div>{t`Query Not Recorded, sorry`}</div>;
      }
      const serializedHash = serializeCardForUrl({
        dataset_query: datasetQuery,
      });

      return (
        <AuditContent
          title={t`Query`}
          subtitle={<OpenInMetabase to={`/question#${serializedHash}`} />}
        >
          <QueryViewer datasetQuery={datasetQuery} />
        </AuditContent>
      );
    }}
  </AuditCustomView>
);

export default AuditQueryDetail;
