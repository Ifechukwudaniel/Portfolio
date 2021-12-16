/*
 *
 * HomePage
 *
 */

import React, { memo, useContext, useState } from "react";
import {
  CheckPagePermissions,
  GlobalContext,
  InputsIndex as Input,
  request,
} from "strapi-helper-plugin";

import { Header } from "@buffetjs/custom";
import PropTypes from "prop-types";
import getTrad from "../../utils/getTrad";
import { ContainerFluid } from "strapi-plugin-documentation/admin/src/containers/HomePage/components";
import Block from "../../components/Block";
import Row from "../../components/Row";

import Button from "../../components/Button";
import axios from "axios";

const HomePage = ({ isLoading }) => {
  const context = useContext(GlobalContext);
  const { formatMessage } = context;

  const [apiKey, setApiKey] = useState("");
  const [updateAddress, setUpdateAddress] = useState(true);
  const [updateNgState, setUpdateNgState] = useState(true);
  const [updatePhoneNumber, setUpdatePhoneNumber] = useState(true);
  const [updateAll, setUpdateAll] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  if (isLoading) {
    return <LoadingIndicatorPage />;
  }

  return (
    <ContainerFluid className="container-fluid">
      <form onSubmit={handleSubmit}>
        <Header
          title={{
            label: formatMessage({
              id: getTrad("containers.HomePage.PluginHeader.title"),
            }),
          }}
          content={formatMessage({
            id: getTrad("containers.HomePage.PluginHeader.description"),
          })}
        />
        <Row>
          <Block>
            <Input
              style={{ zIndex: "9", cursor: "pointer" }}
              inputStyle={{ cursor: "pointer" }}
              name="apiKey"
              type="string"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              label={{
                id: getTrad("containers.HomePage.form.googlePlacesApiKey"),
              }}
              inputDescription={{
                id: getTrad(
                  "containers.HomePage.form.googlePlacesApiKey.description"
                ),
              }}
            />
          </Block>
          <Block>
            <Row>
              <Input
                style={{ zIndex: "9", cursor: "pointer" }}
                type="toggle"
                name="updateAddress"
                onChange={(e) => setUpdateAddress(e.target.value)}
                label={{
                  id: getTrad("containers.HomePage.form.address"),
                }}
                inputDescription={{
                  id: getTrad("containers.HomePage.form.address.description"),
                }}
                value={updateAddress}
              />
              <Input
                style={{ zIndex: "9", cursor: "pointer" }}
                type="toggle"
                name="updateNgState"
                onChange={(e) => setUpdateNgState(e.target.value)}
                label={{
                  id: getTrad("containers.HomePage.form.ngState"),
                }}
                inputDescription={{
                  id: getTrad("containers.HomePage.form.ngState.description"),
                }}
                value={updateNgState}
              />
              <Input
                style={{ zIndex: "9", cursor: "pointer" }}
                type="toggle"
                name="updatePhoneNumber"
                onChange={(e) => setUpdatePhoneNumber(e.target.value)}
                label={{
                  id: getTrad("containers.HomePage.form.phoneNumber"),
                }}
                inputDescription={{
                  id: getTrad(
                    "containers.HomePage.form.phoneNumber.description"
                  ),
                }}
                value={updatePhoneNumber}
              />
            </Row>
          </Block>
          <Block>
            <Row>
              <Input
                style={{ zIndex: "9", cursor: "pointer" }}
                type="toggle"
                name="updateAll"
                onChange={(e) => setUpdateAll(e.target.value)}
                label={{
                  id: getTrad("containers.HomePage.form.updateAll"),
                }}
                inputDescription={{
                  id: getTrad("containers.HomePage.form.updateAll.description"),
                }}
                value={updateAll}
              />
              <Button
                type="submit"
                label={formatMessage({
                  id: getTrad("containers.HomePage.form.submit"),
                })}
              />
            </Row>
          </Block>
        </Row>
      </form>
    </ContainerFluid>
  );
};

export default memo(HomePage);
