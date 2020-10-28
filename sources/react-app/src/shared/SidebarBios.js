/*
 * Copyright (C) 2007-2020 Crafter Software Corporation. All Rights Reserved.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License version 3 as published by
 * the Free Software Foundation.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

import React from 'react';
import Bio from '../components/Bio';
import { usePencil } from './hooks';
import DropZone from './DropZone';

export default function (props) {
  const { model, fieldId } = props;
  return (
    <DropZone
      model={model}
      component="div"
      fieldId={fieldId}
    >
      {
        model[fieldId]?.map(bio => <SidebarBio key={bio.craftercms.id} model={bio} />)
      }
    </DropZone>
  );
}

function SidebarBio(props) {
  const bio = props.model;
  const ice = usePencil(props);
  return (
    <div className="sidebar-box">
      <Bio ice={ice} model={bio} />
    </div>
  );
}
