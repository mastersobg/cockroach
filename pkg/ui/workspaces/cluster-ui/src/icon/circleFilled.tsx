// Copyright 2022 The Cockroach Authors.
//
// Use of this software is governed by the Business Source License
// included in the file licenses/BSL.txt.
//
// As of the Change Date specified in that file, in accordance with
// the Business Source License, use of this software will be governed
// by the Apache License, Version 2.0, included in the file
// licenses/APL.txt.

import * as React from "react";

interface IconProps {
  className: string;
}

export const CircleFilled = ({ className, ...props }: IconProps) => (
  <svg viewBox="0 0 12 12" className={className} {...props}>
    <circle cx="6" cy="6" r="6" fillRule="evenodd" />
  </svg>
);
