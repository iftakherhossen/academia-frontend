import React from 'react';
import Heading from '../Common/Heading';
import ClassWrapper from '../HomeComponents/ClassWrapper';

const ManageAcademicInfo = () => {
     return (
          <div>
               <Heading text={"Manage Academic Info"} dashboard={true} />
               <ClassWrapper onlyClass={true} />
          </div>
     );
};

export default ManageAcademicInfo;