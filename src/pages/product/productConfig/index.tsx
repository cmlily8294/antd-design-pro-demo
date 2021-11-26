import { Card, message } from 'antd';
import ProForm, { ProFormDigit, ProFormText } from '@ant-design/pro-form';
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
    <PageContainer content="产品相关配置">
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
            label="产品名称"
            name="name"
            rules={[
              {
                required: true,
                message: '请输入产品名称',
              },
            ]}
            placeholder="请输入产品名称"
          />
          <ProFormText
            width="md"
            label="型号"
            name="id"
            rules={[
              {
                required: true,
                message: '请输入型号',
              },
            ]}
            placeholder="请输入型号"
          />
          <ProFormText
            width="md"
            label="适用的机床"
            name="name1"
            rules={[
              {
                required: true,
                message: '请输入适用的机床',
              },
            ]}
            placeholder="请输入适用的机床"
          />
          <ProFormText
            width="md"
            label="产品参数"
            name="name2"
            rules={[
              {
                required: true,
                message: '请输入产品参数',
              },
            ]}
            placeholder="请输入产品参数"
          />
          <ProFormDigit width="md" label="售价" name="name3" placeholder="请输入售价" />
        </ProForm>
      </Card>
    </PageContainer>
  );
};

export default BasicForm;
