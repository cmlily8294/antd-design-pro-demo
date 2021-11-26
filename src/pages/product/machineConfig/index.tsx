import { Card, message } from 'antd';
import ProForm, { ProFormText } from '@ant-design/pro-form';
import { useRequest } from 'umi';
import type { FC } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { fakeSubmitForm } from './service';

const BasicForm: FC<Record<string, any>> = () => {
  const { run } = useRequest(fakeSubmitForm, {
    manual: true,
    onSuccess: () => {
      message.success('提交成功');
    },
  });

  const onFinish = async (values: Record<string, any>) => {
    run(values);
  };

  return (
    <PageContainer content="机床相关配置">
      <Card bordered={false}>
        <ProForm
          hideRequiredMark
          style={{ margin: 'auto', marginTop: 8, maxWidth: 600 }}
          name="basic"
          layout="vertical"
          initialValues={{ public: '1' }}
          onFinish={onFinish}
        >
          <ProFormText
            width="md"
            label="机床名称"
            name="name"
            rules={[
              {
                required: true,
                message: '请输入机床名称',
              },
            ]}
            placeholder="请输入机床名称"
          />
          <ProFormText
            width="md"
            label="机床型号"
            name="id"
            rules={[
              {
                required: true,
                message: '请输入机床型号',
              },
            ]}
            placeholder="请输入机床型号"
          />
        </ProForm>
      </Card>
    </PageContainer>
  );
};

export default BasicForm;
